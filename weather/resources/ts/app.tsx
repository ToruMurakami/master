import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
    state = {
        loading: true,
        dataArray: [],
         lat: null,
         lon: null,
    };
    async componentDidMount(){
        //位置情報API
        navigator.geolocation.getCurrentPosition(
            pos => this.setState({ lat: pos.coords.latitude,lon: pos.coords.longitude }),
            err => console.log(err)
        );

        //お天気jsonAPI
        // const url = "http://api.openweathermap.org/data/2.5/weather?q=TOKYO,JP&appid=81090fd563f1bfd82328b01dfef4acdf&lang=ja&units=metric";
        // const response = await fetch(url);
        // const data = await response.json();
        // // console.log(data.Items.Job.Item)
        // this.setState({
        //     dataArray: data.Items,
        //     loading: false,
        // });


        //API Key
        //81090fd563f1bfd82328b01dfef4acdf    
    }
    async componentDidUpdate(){
        //農研機構API
        const response_pos = await fetch("https://aginfo.cgk.affrc.go.jp/ws/rgeocode.php?json&lat=" + this.state.lat+"&lon="+ this.state.lon);
        const data_pos = await response_pos.json();
        // console.log(data_pos.result.prefecture.pname);
        // console.log(data_pos.result.prefecture.pname.replace("東京都","TOKYO"));

        const url = "http://api.openweathermap.org/data/2.5/find?lat="+ this.state.lat +"&lon="+ this.state.lon +"&cnt=1&appid=81090fd563f1bfd82328b01dfef4acdf&lang=ja&units=metric";
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.Items.Job.Item)

        if(this.state.dataArray.length === 0){
            this.setState({
                dataArray: data.list,
                loading: false,
                changeState: true
            });
            console.log("update")
        }
        // console.log(data.list[0].name);
        // console.log(this.state.dataArray);
    }


    render() {
        return (
            <div>
                {
                
                this.state.loading ? (
                    <div>loading..</div>
                ) : (
                    <div className="">
                        {
                            console.log(this.state.dataArray)
                        }
                        {
                            this.state.dataArray.map((item,key)=>{
                                {/* 
                                //@ts-ignore*/}
                                if(item.name != null){
                                    return(
                                        <div key={key} className="box">
                                            <p>{/* 
                                                    //@ts-ignore*/}
                                                    現在地：{item.name}</p>
                                            <p>{/* 
                                                    //@ts-ignore*/}
                                                    現在の天気：{item.weather[0].main}</p>
                                            <p>{/* 
                                                    //@ts-ignore*/}
                                                    現在の気温：{item.main.temp}</p>
                                        </div>
                                    )
                                }
                                
                            })
                        }
                    </div>
                )}
            </div>
        );
    }
}
 
ReactDOM.render(
    <App />,
    document.getElementById('app')
)   