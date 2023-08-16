import Layout, { siteTitle } from "../components/layout";

//記事タイトルが押されたとき
function handleClick_view(e) {
  const contents = document.getElementById(e.target.dataset.letter);
  contents.style.display = "block";
  contents.classList.add("fadein");
}

//topへ戻るが押されたとき
function handleClick_top(e) {
  const contents = document.getElementById(e.target.dataset.letter);
  contents.style.display = "none";
  contents.classList.remove("fadein");
  window.scrollTo({
    top: 0,
  });
}

//HTML
const Index = (props) => (
  <Layout home>
    <section className="post_section">
      <h1>HOME</h1>
      {props.data.map((data) => {
        return (
          <div>
            {/* タイトル */}
            <p onClick={handleClick_view} data-letter={"post_" + data.id}>
              {data.title.rendered}
            </p>
            {/* 記事詳細 */}
            <div className="post_content" id={"post_" + data.id}>
              {/* 記事タイトル */}
              <p className="title">{data.title.rendered}</p>
              {/* 記事本文 */}
              <div>{data.content.rendered}</div>
              {/* トップに戻るボタン */}
              <p
                className="top_btn"
                onClick={handleClick_top}
                data-letter={"post_" + data.id}
              >
                topへ戻る
              </p>
            </div>
          </div>
        );
      })}
    </section>
  </Layout>
);

//API呼び出し
Index.getInitialProps = async function () {
  const res = await fetch(
    "https://www.next-doorrr.com/knowledge-box/wp-json/wp/v2/posts?per_page=5"
  );
  const data = await res.json();

  return {
    data: data,
  };
};
export default Index;
