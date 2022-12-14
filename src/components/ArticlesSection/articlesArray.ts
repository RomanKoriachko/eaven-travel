
export type CommentsProp = {
    avatar: string
    name: string
    isAdmin: boolean
    date: string
    text: string
    reply: CommentsProp[]
    email: string
    id?: number
}

export type ReplyProp = {
    avatar: string
    name: string
    isAdmin: boolean
    date: string
    text: string
    reply: CommentsProp[]
    email: string
}

export type Articles = {
    id: number
    image: string
    date: string
    country: string
    dash: string
    section: string
    header: string
    text: string
    articleText: string
    firstArticleParagraph?: string
    secondArticleParagraph?: string
    articleImg1?: string
    articleImg2?: string
    articleImg3?: string
    articleImg4?: string
    articleImg5?: string
    articleImg6?: string
    comments: CommentsProp[]
}

let articlesArray: Articles[] = [
    {
        id: 1,
        image: "/images/article-img-1.jpg",
        date: "May 30, 2019",
        country: "france",
        dash: "-",
        section: "TIPS & TRICKS",
        header: "Nice and Cozy House for Stay – Travel Guide",
        text: "Things to do in Paris The most difficult thing is the decision to act, the rest is merely tenacity. Cras purus turpis, laoreet eget hendrerit id, ornare commodo augue. Integer …",
        articleText: "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.",
        firstArticleParagraph: "1. All around the Eiffel Tower",
        secondArticleParagraph: "2. Visit the Artist Area Montmartre",
        articleImg1: "/images/articlePageImg-1.jpg",
        articleImg2: "/images/articlePageImg-5.jpg",
        articleImg3: "/images/articlePageImg-6.jpg",
        articleImg4: "/images/articlePageImg-7.jpg",
        articleImg5: "/images/articlePageImg-8.jpg",
        comments: [
            {
                avatar: "/images/user1-img.jpeg",
                name: "Nina Young",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus metus id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed enim vitae magna pretium tincidunt eget vel massa.",
                reply: [],
                email:"",
                
            },
            {
                avatar: "/images/user2-img.jpeg",
                name: "Roxie Spencer",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Aenean in fringilla dui, nec ullamcorper leo. Curabitur lacus nulla, ultricies sit amet efficitur quis, congue lobortis magna. Proin hendrerit dolor sit amet erat convallis lobortis. Phasellus rhoncus eros nec ultricies luctus. Morbi suscipit pretium mi, eu faucibus odio fermentum sit amet.",
                reply: [
                    {
                        avatar: "/images/admin-img.png",
                        name: "Kiko Morris",
                        isAdmin: true,
                        date: "October 13, 2019 at 1:51 pm",
                        text: "Thank you! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero faucibus, finibus justo vitae, ultrices lectus.",
                        reply:[],
                        email:"",
                    },
                ],
                email:"",
            },
            {
                avatar: "/images/user3-img.jpeg",
                name: "Adam Dawson",
                isAdmin: false,
                date: "October 13, 2019 at 1:47 pm",
                text: "Maecenas auctor, elit nec iaculis ullamcorper, dolor felis euismod est, ut efficitur enim ipsum ac est. Sed quam purus, euismod vitae molestie id, ultrices eu erat. Pellentesque elementum libero ut nisl gravida faucibus.",
                reply: [],
                email:"",
            },
            
        ],
    },
    {
        id: 2,
        image: "/images/article-img-2.jpg",
        date: "May 29, 2019",
        country: "japan",
        dash: "-",
        section: "SOLO TRAVEL",
        header: "Fly to Tokyo for My Christmas 2019! And My Trip Plan Inspirations",
        text: "Vel aliquet diam. Suspendisse quis sodales risus. Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus metus id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing …",
        articleText: `Better to see something once than to hear about it a thousand times. Because in the end, you won’t remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain. Vel aliquet diam. Suspendisse quis sodales risus. Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus metus id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed enim vitae magna pretium tincidunt eget vel massa.`,
        articleImg1: "/images/articlePageImg-2.jpg",
        articleImg2: "/images/articlePageImg-5.jpg",
        articleImg3: "/images/articlePageImg-6.jpg",
        articleImg4: "/images/articlePageImg-7.jpg",
        articleImg5: "/images/articlePageImg-8.jpg",
        comments: [
            {
                avatar: "/images/user3-img.jpeg",
                name: "Nina Young",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus metus id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed enim vitae magna pretium tincidunt eget vel massa.",
                reply: [
                    {
                        avatar: "/images/admin-img.png",
                        name: "Kiko Morris",
                        isAdmin: true,
                        date: "October 13, 2019 at 1:51 pm",
                        text: "Thank you! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero faucibus, finibus justo vitae, ultrices lectus.",
                        reply:[],
                        email:"",
                    },
                ],
                email:"",
            },
            {
                avatar: "/images/user1-img.jpeg",
                name: "Roxie Spencer",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Aenean in fringilla dui, nec ullamcorper leo. Curabitur lacus nulla, ultricies sit amet efficitur quis, congue lobortis magna. Proin hendrerit dolor sit amet erat convallis lobortis. Phasellus rhoncus eros nec ultricies luctus. Morbi suscipit pretium mi, eu faucibus odio fermentum sit amet.",
                reply: [],
                email:"",
            },
            {
                avatar: "/images/user1-img.jpeg",
                name: "Adam Dawson",
                isAdmin: false,
                date: "October 13, 2019 at 1:47 pm",
                text: "Maecenas auctor, elit nec iaculis ullamcorper, dolor felis euismod est, ut efficitur enim ipsum ac est. Sed quam purus, euismod vitae molestie id, ultrices eu erat. Pellentesque elementum libero ut nisl gravida faucibus.",
                reply: [],
                email:"",
            },
        ],
    },
    {
        id: 3,
        image: "/images/article-img-3.jpg",
        date: "May 28, 2019",
        country: "europe",
        dash: "",
        section: "",
        header: "Travel to Santa’s Village: Modern Santa comes with Public Transport",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. When to visit …",
        articleText: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. Suspendisse quis sodales risus. Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus metus id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        articleImg1: "/images/articlePageImg-3.jpg",
        articleImg2: "/images/articlePageImg-5.jpg",
        articleImg3: "/images/articlePageImg-6.jpg",
        articleImg4: "/images/articlePageImg-7.jpg",
        articleImg5: "/images/articlePageImg-8.jpg",
        comments: [
            {
                avatar: "/images/admin-img.png",
                name: "Kiko Morris",
                isAdmin: true,
                date: "October 13, 2019 at 1:51 pm",
                text: "Thank you! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero faucibus, finibus justo vitae, ultrices lectus.",
                reply:[],
                email:"",
            },
        ],
    },
    {
        id: 4,
        image: "/images/article-img-4.jpg",
        date: "May 27, 2019",
        country: "australia",
        dash: "-",
        section: "GUIDES",
        header: "Penguin Parade Australia: Penguins Don’t Live Just in Antarctica",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
        articleText: "There are 18 species of Penguin, each slightly different, and all live in the Southern hemisphere. Many live at the South Pole on Antarctica, which also has the most penguins of any region in the world, but it’s not the only place where you’ll find the cute Tuxedoed Birds. The most difficult thing is the decision to act, the rest is merely tenacity. Cras purus turpis, laoreet eget hendrerit id, ornare commodo augue. Integer sit amet ante sollicitudin, luctus ipsum non, lobortis nibh. Sed felis ipsum, ornare ac varius vel, mattis sed sapien. Mauris nec tortor diam. Sed in ipsum finibus, sollicitudin nisl at, malesuada nibh.",
        articleImg1: "/images/articlePageImg-4.jpg",
        articleImg2: "/images/articlePageImg-5.jpg",
        articleImg3: "/images/articlePageImg-6.jpg",
        articleImg4: "/images/articlePageImg-7.jpg",
        articleImg5: "/images/articlePageImg-8.jpg",
        comments: [
            {
                avatar: "/images/user2-img.jpeg",
                name: "Nina Young",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dolorum quisquam possimus itaque eligendi nam, distinctio nisi? Consequatur corrupti assumenda, recusandae ab voluptatum unde enim ut quos est magnam debitis.",
                reply: [
                    {
                        avatar: "/images/admin-img.png",
                        name: "Kiko Morris",
                        isAdmin: true,
                        date: "October 13, 2019 at 1:51 pm",
                        text: "Thank you! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero faucibus, finibus justo vitae, ultrices lectus.",
                        reply:[],
                        email:"",
                    },
                ],
                email:"",
            },
            {
                avatar: "/images/user1-img.jpeg",
                name: "Roxie Spencer",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Aenean in fringilla dui, nec ullamcorper leo. Curabitur lacus nulla, ultricies sit amet efficitur quis, congue lobortis magna. Proin hendrerit dolor sit amet erat convallis lobortis. Phasellus rhoncus eros nec ultricies luctus. Morbi suscipit pretium mi, eu faucibus odio fermentum sit amet.",
                reply: [],
                email:"",
            },
        ],
    },
    {
        id: 5,
        image: "/images/article-img-5.jpg",
        date: "May 26, 2019",
        country: "singapore",
        dash: "-",
        section: "TIPS & TRICKS",
        header: "The Complete Guide – Singapore’s Gardens by the Bay",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
        articleText: "If you’re twenty-two, physically fit, hungry to learn and be better, I urge you to travel – as far and as widely as possible. Sleep on floors if you have to. Find out how other people live and eat and cook. Learn from them – wherever you go.Fusce porttitor metus eget lectus consequat, sit amet feugiat magna vulputate. Phasellus iaculis tellus augue, at ultrices lacus efficitur.",
        articleImg1: "/images/articlePageImg-9.jpg",
        articleImg3: "/images/articlePageImg-10.jpg",
        articleImg4: "/images/articlePageImg-5.jpg",
        articleImg5: "/images/articlePageImg-6.jpg",
        comments: [
            {
                avatar: "/images/user3-img.jpeg",
                name: "Adam Dawson",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dolorum quisquam possimus itaque eligendi nam, distinctio nisi? Consequatur corrupti assumenda, recusandae ab voluptatum unde enim ut quos est magnam debitis.",
                reply: [],
                email:"",
            },
        ],
    },
    {
        id: 6,
        image: "/images/article-img-6.jpg",
        date: "May 25, 2019",
        country: "europe",
        dash: "-",
        section: "GUIDES",
        header: "Seven Artisan Villages in Finland You Simply Must Visit",
        text: "The most difficult thing is the decision to act, the rest is merely tenacity. Cras purus turpis, laoreet eget hendrerit id, ornare commodo augue. Integer sit amet ante sollicitudin, luctus …",
        articleText: "Alittle bad taste is like a nice splash of paprika. We all need a splash of bad taste—it’s hearty, it’s healthy, it’s physical. I think we could use more of it. No taste is what I’m against. People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the things I have done. Innovation is saying no to 1,000 things.",
        articleImg1: "/images/articlePageImg-12.jpg",
        articleImg2: "/images/articlePageImg-8.jpg",
        articleImg3: "/images/articlePageImg-7.jpg",
        articleImg4: "/images/articlePageImg-10.jpg",
        articleImg5: "/images/articlePageImg-9.jpg",
        comments: [
            {
                avatar: "/images/admin-img.png",
                name: "Kiko Morris",
                isAdmin: true,
                date: "October 13, 2019 at 1:51 pm",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dolorum quisquam possimus itaque eligendi nam, distinctio nisi? Consequatur corrupti assumenda, recusandae ab voluptatum unde enim ut quos est magnam debitis.",
                reply:[],
                email:"",
            },
        ],
    },
    {
        id: 7,
        image: "/images/article-img-7.jpg",
        date: "May 24, 2019",
        country: "australia",
        dash: "-",
        section: "GUIDES",
        header: "What’s the Best Cruise Tour to see Emperor Penguins?",
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce porttitor metus eget lectus consequat, sit amet feugiat magna vulputate. Phasellus iaculis tellus augue, at ultrices …",
        articleText: "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.",
        articleImg1: "/images/articlePageImg-11.jpg",
        articleImg2: "/images/articlePageImg-6.jpg",
        articleImg3: "/images/articlePageImg-5.jpg",
        articleImg4: "/images/articlePageImg-10.jpg",
        articleImg5: "/images/articlePageImg-12.jpg",
        comments: [],
    },
    {
        id: 8,
        image: "/images/article-img-8.jpg",
        date: "May 24, 2019",
        country: "europe",
        dash: "-",
        section: "SOLO TRAVEL",
        header: "Unique Short Breaks in the Mountains of Switzerland",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. What to do …",
        articleText: `Better to see something once than to hear about it a thousand times. Because in the end, you won’t remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain. Vel aliquet diam. Suspendisse quis sodales risus. Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus metus id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed enim vitae magna pretium tincidunt eget vel massa.`,
        articleImg1: "/images/articlePageImg-3.jpg",
        articleImg2: "/images/articlePageImg-4.jpg",
        articleImg3: "/images/articlePageImg-5.jpg",
        articleImg4: "/images/articlePageImg-6.jpg",
        articleImg5: "/images/articlePageImg-7.jpg",
        comments: [],
    },
    {
        id: 9,
        image: "/images/article-img-9.jpg",
        date: "May 23, 2019",
        country: "australia",
        dash: "-",
        section: "GUIDES",
        header: "Just Cannot Miss! The Best Location for Whale Watching in Port Stephens",
        text: "Things to do in Australia The most difficult thing is the decision to act, the rest is merely tenacity. Cras purus turpis, laoreet eget hendrerit id, ornare commodo augue. Integer …",
        articleText: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. Suspendisse quis sodales risus. Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus metus id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        articleImg1: "/images/articlePageImg-4.jpg",
        articleImg2: "/images/articlePageImg-5.jpg",
        articleImg3: "/images/articlePageImg-6.jpg",
        articleImg4: "/images/articlePageImg-7.jpg",
        articleImg5: "/images/articlePageImg-8.jpg",
        comments: [
            {
                avatar: "/images/user2-img.jpeg",
                name: "Roxie Spencer",
                isAdmin: false,
                date: "October 13, 2019 at 1:47 pm",
                text: "Maecenas auctor, elit nec iaculis ullamcorper, dolor felis euismod est, ut efficitur enim ipsum ac est. Sed quam purus, euismod vitae molestie id, ultrices eu erat. Pellentesque elementum libero ut nisl gravida faucibus.",
                reply: [
                    {
                        avatar: "/images/user3-img.jpeg",
                        name: "Adam Dawson",
                        isAdmin: false,
                        date: "October 13, 2019 at 1:47 pm",
                        text: "Maecenas auctor, elit nec iaculis ullamcorper, dolor felis euismod est, ut efficitur enim ipsum ac est. Sed quam purus, euismod vitae molestie id, ultrices eu erat. Pellentesque elementum libero ut nisl gravida faucibus.",
                        reply:[],
                        email:"",
                    },
                ],
                email:"",
            },
        ],
    },
    {
        id: 10,
        image: "/images/article-img-10.jpg",
        date: "May 23, 2019",
        country: "france",
        dash: "-",
        section: "TIPS & TRICKS",
        header: "The Best Eleven Reasons to Visit Paris",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
        articleText: "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.",
        firstArticleParagraph: "1. All around the Eiffel Tower",
        secondArticleParagraph: "2. Visit the Artist Area Montmartre",
        articleImg1: "/images/articlePageImg-7.jpg",
        articleImg2: "/images/articlePageImg-2.jpg",
        articleImg3: "/images/articlePageImg-1.jpg",
        articleImg5: "/images/articlePageImg-4.jpg",
        comments: [
            {
                avatar: "/images/user3-img.jpeg",
                name: "Adam Dawson",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dolorum quisquam possimus itaque eligendi nam, distinctio nisi? Consequatur corrupti assumenda, recusandae ab voluptatum unde enim ut quos est magnam debitis.",
                reply: [],
                email:"",
            },
        ],
    },
    {
        id: 11,
        image: "/images/article-img-11.jpg",
        date: "May 20, 2019",
        country: "france",
        dash: "-",
        section: "GUIDES",
        header: "Plan Your Next Destination: The Charming Village in the French Alps",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
        articleText: `Better to see something once than to hear about it a thousand times. Because in the end, you won’t remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain. Vel aliquet diam. Suspendisse quis sodales risus. Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus metus id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed enim vitae magna pretium tincidunt eget vel massa.`,
        articleImg1: "/images/articlePageImg-2.jpg",
        articleImg2: "/images/articlePageImg-8.jpg",
        articleImg3: "/images/articlePageImg-7.jpg",
        articleImg4: "/images/articlePageImg-10.jpg",
        articleImg5: "/images/articlePageImg-11.jpg",
        comments: [
            {
                avatar: "/images/user1-img.jpeg",
                name: "Nina Young",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus metus id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed enim vitae magna pretium tincidunt eget vel massa.",
                reply: [],
                email:"",
            },
            {
                avatar: "/images/user2-img.jpeg",
                name: "Adam Dawson",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dolorum quisquam possimus itaque eligendi nam, distinctio nisi? Consequatur corrupti assumenda, recusandae ab voluptatum unde enim ut quos est magnam debitis.",
                reply: [],
                email:"",
            },
        ],
    },
    {
        id: 12,
        image: "/images/article-img-12.jpg",
        date: "May 22, 2019",
        country: "italy",
        dash: "-",
        section: "GUIDES",
        header: "The Best Coastal City for People Who Want to Escape the Crowds",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. Things to do …",
        articleText: "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.",
        articleImg1: "/images/articlePageImg-6.jpg",
        articleImg2: "/images/articlePageImg-7.jpg",
        articleImg3: "/images/articlePageImg-8.jpg",
        articleImg4: "/images/articlePageImg-10.jpg",
        articleImg5: "/images/articlePageImg-11.jpg",
        comments: [
            {
                avatar: "/images/user4-img.jpg",
                name: "John Marston",
                isAdmin: false,
                date: "October 21, 1899 at 2:35 pm",
                text: "If You Find Yourself In A Hole, The First Thing To Do Is Stop Diggin",
                reply: [],
                email:"",
            },
            {
                avatar: "/images/user3-img.jpeg",
                name: "Adam Dawson",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dolorum quisquam possimus itaque eligendi nam, distinctio nisi? Consequatur corrupti assumenda, recusandae ab voluptatum unde enim ut quos est magnam debitis.",
                reply: [],
                email:"",
            },
        ],
    },
    {
        id: 13,
        image: "/images/article-img-13.jpg",
        date: "May 21, 2019",
        country: "italy",
        dash: "-",
        section: "TIPS & TRICKS",
        header: "The Beginner’s Guide to Hiking in the Majestic Mountains",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. Things to do …",
        articleText: "Alittle bad taste is like a nice splash of paprika. We all need a splash of bad taste—it’s hearty, it’s healthy, it’s physical. I think we could use more of it. No taste is what I’m against. People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the things I have done. Innovation is saying no to 1,000 things.",
        articleImg1: "/images/articlePageImg-10.jpg",
        articleImg2: "/images/articlePageImg-11.jpg",
        articleImg3: "/images/articlePageImg-12.jpg",
        articleImg4: "/images/articlePageImg-1.jpg",
        comments: [],
    },
    {
        id: 14,
        image: "/images/article-img-14.jpg",
        date: "May 21, 2019",
        country: "italy",
        dash: "-",
        section: "GUIDES",
        header: "20 Best Things to Do in Florence and Where to Eat & Stay",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
        articleText: "Cras purus turpis, laoreet eget hendrerit id, ornare commodo augue. Integer sit amet ante sollicitudin, luctus ipsum non, lobortis nibh. Sed felis ipsum, ornare ac varius vel, mattis sed sapien. Mauris nec tortor diam. Sed in ipsum finibus, sollicitudin nisl at, malesuada nibh.",
        articleImg1: "/images/articlePageImg-1.jpg",
        articleImg3: "/images/articlePageImg-2.jpg",
        articleImg4: "/images/articlePageImg-7.jpg",
        articleImg5: "/images/articlePageImg-8.jpg",
        comments: [
            {
                avatar: "/images/user5-img.jpg",
                name: "Arthur Morgan",
                isAdmin: false,
                date: "June 6, 1899 at 3:21 pm",
                text: "You know, all that ever mattered to me was loyalty? It was all I knew. It was all I ever believed in",
                reply: [],
                email:"",
            },
        ],
    },
    {
        id: 15,
        image: "/images/article-img-15.jpg",
        date: "May 21, 2019",
        country: "japan",
        dash: "",
        section: "",
        header: "Kyoto Travel Guide – Have the Best Experience At Fushimi Inari Shrine",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
        articleText: `Better to see something once than to hear about it a thousand times. Because in the end, you won’t remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain. Vel aliquet diam. Suspendisse quis sodales risus. Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus metus id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed enim vitae magna pretium tincidunt eget vel massa.`,
        articleImg1: "/images/articlePageImg-10.jpg",
        articleImg2: "/images/articlePageImg-6.jpg",
        articleImg3: "/images/articlePageImg-5.jpg",
        articleImg4: "/images/articlePageImg-7.jpg",
        articleImg5: "/images/articlePageImg-8.jpg",
        comments: [
            {
                avatar: "/images/user1-img.jpeg",
                name: "Roxie Spencer",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Aenean in fringilla dui, nec ullamcorper leo. Curabitur lacus nulla, ultricies sit amet efficitur quis, congue lobortis magna. Proin hendrerit dolor sit amet erat convallis lobortis. Phasellus rhoncus eros nec ultricies luctus. Morbi suscipit pretium mi, eu faucibus odio fermentum sit amet.",
                reply: [
                    {
                        avatar: "/images/user1-img.jpeg",
                        name: "Roxie Spencer",
                        isAdmin: false,
                        date: "October 13, 2019 at 1:46 pm",
                        text: "Aenean in fringilla dui, nec ullamcorper leo. Curabitur lacus nulla, ultricies sit amet efficitur quis, congue lobortis magna. Proin hendrerit dolor sit amet erat convallis lobortis. Phasellus rhoncus eros nec ultricies luctus. Morbi suscipit pretium mi, eu faucibus odio fermentum sit amet.",
                        reply:[],
                        email:"",
                    },
                ],
                email:"",
            },
        ],
    },
    {
        id: 16,
        image: "/images/article-img-16.jpg",
        date: "May 21, 2019",
        country: "japan",
        dash: "-",
        section: "GUIDES",
        header: "Nara Park: 5 Facts about Japan’s Sacred Deer Sanctuary",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
        articleText: "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.",
        firstArticleParagraph: "1. All around the Eiffel Tower",
        secondArticleParagraph: "2. Visit the Artist Area Montmartre",
        articleImg1: "/images/articlePageImg-1.jpg",
        articleImg2: "/images/articlePageImg-2.jpg",
        articleImg3: "/images/articlePageImg-3.jpg",
        articleImg4: "/images/articlePageImg-7.jpg",
        comments: [
            {
                avatar: "/images/user1-img.jpeg",
                name: "Roxie Spencer",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Aenean in fringilla dui, nec ullamcorper leo. Curabitur lacus nulla, ultricies sit amet efficitur quis, congue lobortis magna. Proin hendrerit dolor sit amet erat convallis lobortis. Phasellus rhoncus eros nec ultricies luctus. Morbi suscipit pretium mi, eu faucibus odio fermentum sit amet.",
                reply: [],
                email:"",
            },
        ],
    },
    {
        id: 17,
        image: "/images/article-img-17.jpg",
        date: "May 19, 2019",
        country: "singapore",
        dash: "",
        section: "",
        header: "A Gorgeous Day Out at Singapore Botanic Gardens",
        text: "Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id velit semper bibendum et vel purus. The most difficult …",
        articleText: `Better to see something once than to hear about it a thousand times. Because in the end, you won’t remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain. Vel aliquet diam. Suspendisse quis sodales risus. Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus metus id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed enim vitae magna pretium tincidunt eget vel massa.`,
        articleImg1: "/images/articlePageImg-8.jpg",
        articleImg2: "/images/articlePageImg-5.jpg",
        articleImg3: "/images/articlePageImg-6.jpg",
        articleImg4: "/images/articlePageImg-7.jpg",
        articleImg5: "/images/articlePageImg-8.jpg",
        comments: [
            {
                avatar: "/images/user2-img.jpeg",
                name: "Nina Young",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dolorum quisquam possimus itaque eligendi nam, distinctio nisi? Consequatur corrupti assumenda, recusandae ab voluptatum unde enim ut quos est magnam debitis.",
                reply: [],
                email:"",
            },
            {
                avatar: "/images/user1-img.jpeg",
                name: "Roxie Spencer",
                isAdmin: false,
                date: "October 13, 2019 at 1:46 pm",
                text: "Aenean in fringilla dui, nec ullamcorper leo. Curabitur lacus nulla, ultricies sit amet efficitur quis, congue lobortis magna. Proin hendrerit dolor sit amet erat convallis lobortis. Phasellus rhoncus eros nec ultricies luctus. Morbi suscipit pretium mi, eu faucibus odio fermentum sit amet.",
                reply: [
                    {
                        avatar: "/images/user6-img.jpg",
                        name: "Dutch Van Der Linde",
                        isAdmin: false,
                        date: "September 26, 1890 at 6:23 pm",
                        text: "We can’t fight nature. Can’t fight change. Can’t fight gravity.",
                        reply:[],
                        email:"",
                    },
                ],
                email:"",
            },
        ],
    },
]

export default articlesArray

export const getArticlesObject = (array:Articles[]) => {
    return array.reduce((object, product) => ({
        ...object,
        [product.id]:product
    }),{})
} 