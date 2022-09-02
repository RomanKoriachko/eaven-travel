export type Articles = {
    id: number
    image: string
    date: string
    country: string
    dash: string
    section: string
    header: string
    text: string
}

const articlesArray: Articles[] = [
    {
        id: 1,
        image: "images/article-img-1.jpg",
        date: "May 30, 2019",
        country: "france",
        dash: "-",
        section: "TIPS & TRICKS",
        header: "Nice and Cozy House for Stay – Travel Guide",
        text: "Things to do in Paris The most difficult thing is the decision to act, the rest is merely tenacity. Cras purus turpis, laoreet eget hendrerit id, ornare commodo augue. Integer …",
    },
    {
        id: 2,
        image: "images/article-img-2.jpg",
        date: "May 29, 2019",
        country: "japan",
        dash: "-",
        section: "SOLO TRAVEL",
        header: "Fly to Tokyo for My Christmas 2019! And My Trip Plan Inspirations",
        text: "Vel aliquet diam. Suspendisse quis sodales risus. Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus metus id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing …",
    },
    {
        id: 3,
        image: "images/article-img-3.jpg",
        date: "May 28, 2019",
        country: "europe",
        dash: "",
        section: "",
        header: "Travel to Santa’s Village: Modern Santa comes with Public Transport",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. When to visit …",
    },
    {
        id: 4,
        image: "images/article-img-4.jpg",
        date: "May 27, 2019",
        country: "australia",
        dash: "-",
        section: "GUIDES",
        header: "Penguin Parade Australia: Penguins Don’t Live Just in Antarctica",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
    },
    {
        id: 5,
        image: "images/article-img-5.jpg",
        date: "May 26, 2019",
        country: "singapore",
        dash: "-",
        section: "TIPS & TRICKS",
        header: "The Complete Guide – Singapore’s Gardens by the Bay",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
    },
    {
        id: 6,
        image: "images/article-img-6.jpg",
        date: "May 25, 2019",
        country: "europe",
        dash: "-",
        section: "GUIDES",
        header: "Seven Artisan Villages in Finland You Simply Must Visit",
        text: "The most difficult thing is the decision to act, the rest is merely tenacity. Cras purus turpis, laoreet eget hendrerit id, ornare commodo augue. Integer sit amet ante sollicitudin, luctus …",
    },
    {
        id: 7,
        image: "images/article-img-7.jpg",
        date: "May 24, 2019",
        country: "australia",
        dash: "-",
        section: "GUIDES",
        header: "What’s the Best Cruise Tour to see Emperor Penguins?",
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce porttitor metus eget lectus consequat, sit amet feugiat magna vulputate. Phasellus iaculis tellus augue, at ultrices …",
    },
    {
        id: 8,
        image: "images/article-img-8.jpg",
        date: "May 24, 2019",
        country: "europe",
        dash: "-",
        section: "SOLO TRAVEL",
        header: "Unique Short Breaks in the Mountains of Switzerland",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. What to do …",
    },
    {
        id: 9,
        image: "images/article-img-9.jpg",
        date: "May 23, 2019",
        country: "australia",
        dash: "-",
        section: "GUIDES",
        header: "Just Cannot Miss! The Best Location for Whale Watching in Port Stephens",
        text: "Things to do in Australia The most difficult thing is the decision to act, the rest is merely tenacity. Cras purus turpis, laoreet eget hendrerit id, ornare commodo augue. Integer …",
    },
    {
        id: 10,
        image: "images/article-img-10.jpg",
        date: "May 23, 2019",
        country: "france",
        dash: "-",
        section: "TIPS & TRICKS",
        header: "The Best Eleven Reasons to Visit Paris",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
    },
    {
        id: 11,
        image: "images/article-img-11.jpg",
        date: "May 20, 2019",
        country: "france",
        dash: "-",
        section: "GUIDES",
        header: "Plan Your Next Destination: The Charming Village in the French Alps",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
    },
    {
        id: 12,
        image: "images/article-img-12.jpg",
        date: "May 22, 2019",
        country: "italy",
        dash: "-",
        section: "GUIDES",
        header: "The Best Coastal City for People Who Want to Escape the Crowds",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. Things to do …",
    },
    {
        id: 13,
        image: "images/article-img-13.jpg",
        date: "May 21, 2019",
        country: "italy",
        dash: "-",
        section: "TIPS & TRICKS",
        header: "The Beginner’s Guide to Hiking in the Majestic Mountains",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. Things to do …",
    },
    {
        id: 14,
        image: "images/article-img-14.jpg",
        date: "May 21, 2019",
        country: "italy",
        dash: "-",
        section: "GUIDES",
        header: "20 Best Things to Do in Florence and Where to Eat & Stay",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
    },
    {
        id: 15,
        image: "images/article-img-15.jpg",
        date: "May 21, 2019",
        country: "japan",
        dash: "",
        section: "",
        header: "Kyoto Travel Guide – Have the Best Experience At Fushimi Inari Shrine",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
    },
    {
        id: 16,
        image: "images/article-img-16.jpg",
        date: "May 21, 2019",
        country: "japan",
        dash: "-",
        section: "GUIDES",
        header: "Nara Park: 5 Facts about Japan’s Sacred Deer Sanctuary",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
    },
    {
        id: 17,
        image: "images/article-img-17.jpg",
        date: "May 19, 2019",
        country: "singapore",
        dash: "",
        section: "",
        header: "A Gorgeous Day Out at Singapore Botanic Gardens",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
    },
]

export default articlesArray