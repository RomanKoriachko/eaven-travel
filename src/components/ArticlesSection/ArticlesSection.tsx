import ArticleItem from 'components/ArticlesSection/ArticleItem'
import React from 'react'
import './ArticlesSection.scss'
// import articlesArray from './articlesArray'

type Props = {}

type ArticleProps = {
    image: string
    date: string
    country: string
    dash: string
    section: string
    header: string
    text: string
}

const ArticlesSection = ({}: Props) => {
    return (
        <section className="articles">
            <div className="container">
                <div className="articles-header">Latest Articles</div>
                <div className="articles-wrapper">
                    <ArticleItem
                        image="images/article-img-1.jpg"
                        date="May 27, 2019"
                        country="Australia"
                        dash="-"
                        section="GUIDES"
                        header="Penguin Parade Australia: Penguins Don’t Live Just in Antarctica"
                        text="Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …"
                    />
                    <ArticleItem
                        image="images/article-img-4.jpg"
                        date="May 27, 2019"
                        country="Australia"
                        dash="-"
                        section="GUIDES"
                        header="Penguin Parade Australia: Penguins Don’t Live Just in Antarctica"
                        text="Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …"
                    />
                    <ArticleItem
                        image="images/article-img-7.jpg"
                        date="May 24, 2019"
                        country="Australia"
                        dash="-"
                        section="GUIDES"
                        header="What’s the Best Cruise Tour to see Emperor Penguins?"
                        text="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce porttitor metus eget lectus consequat, sit amet feugiat magna vulputate. Phasellus iaculis tellus augue, at ultrices …"
                    />
                    <ArticleItem
                        image="images/article-img-10.jpg"
                        date="May 23, 2019"
                        country="France"
                        dash="-"
                        section="TIPS & TRICKS"
                        header="The Best Eleven Reasons to Visit Paris"
                        text="Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …"
                    />
                    <ArticleItem
                        image="images/article-img-2.jpg"
                        date="May 29, 2019"
                        country="Japan"
                        dash="-"
                        section="SOLO TRAVEL"
                        header="Fly to Tokyo for My Christmas 2019! And My Trip Plan Inspirations"
                        text="Vel aliquet diam. Suspendisse quis sodales risus. Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus metus id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing …"
                    />
                    <ArticleItem
                        image="images/article-img-5.jpg"
                        date="May 26, 2019"
                        country="Singapore"
                        dash="-"
                        section="TIPS & TRICKS"
                        header="The Complete Guide – Singapore’s Gardens by the Bay"
                        text="Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …"
                    />
                    <ArticleItem
                        image="images/article-img-8.jpg"
                        date="May 24, 2019"
                        country="Europe"
                        dash="-"
                        section="SOLO TRAVEL"
                        header="Unique Short Breaks in the Mountains of Switzerland"
                        text="Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. What to do …"
                    />
                    <ArticleItem
                        image="images/article-img-3.jpg"
                        date="May 28, 2019"
                        country="Europe"
                        dash=""
                        section=""
                        header="Travel to Santa’s Village: Modern Santa comes with Public Transport"
                        text="Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. When to visit …"
                    />
                    <ArticleItem
                        image="images/article-img-6.jpg"
                        date="May 25, 2019"
                        country="Europe"
                        dash="-"
                        section="GUIDES"
                        header="Seven Artisan Villages in Finland You Simply Must Visit"
                        text="The most difficult thing is the decision to act, the rest is merely tenacity. Cras purus turpis, laoreet eget hendrerit id, ornare commodo augue. Integer sit amet ante sollicitudin, luctus …"
                    />
                    <ArticleItem
                        image="images/article-img-9.jpg"
                        date="May 23, 2019"
                        country="Australia"
                        dash="-"
                        section="GUIDES"
                        header="Just Cannot Miss! The Best Location for Whale Watching in Port Stephens"
                        text="Things to do in Australia The most difficult thing is the decision to act, the rest is merely tenacity. Cras purus turpis, laoreet eget hendrerit id, ornare commodo augue. Integer …"
                    />
                </div>
                <button className="articles-btn">Load more</button>
            </div>
        </section>
    )
}

export default ArticlesSection
