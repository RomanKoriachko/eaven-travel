import articlesArray from 'components/ArticlesSection/articlesArray'
import './Recomendations.scss'
import RecomendationsItem from './RecomendationsItem'

type Props = {
    currentId: number
}

type ArticleProps = {
    image: string
    country: string
    dash: string
    section: string
    header: string
    id: number
}

const Recomendations = ({ currentId }: Props) => {
    let randomArr: ArticleProps[] = []
    let articlesArrayCopy: ArticleProps[] = []
    let newArr: ArticleProps[] = []

    articlesArrayCopy = [...articlesArray]
    articlesArrayCopy.splice(currentId - 1, 1)

    randomArr = articlesArrayCopy.sort(function () {
        return 0.5 - Math.random()
    })

    randomArr.map((arrayItem: ArticleProps, i: number) => {
        if (i < 4) {
            return newArr.splice(0, 0, arrayItem)
        } else {
            return undefined
        }
    })

    return (
        <div className="recomendations">
            <div className="recomendations-line"></div>
            <div className="recomendations-header">
                You may also be interested
            </div>
            <div className="recomendations-wrapper">
                {newArr.map(
                    ({
                        image,
                        country,
                        dash,
                        section,
                        header,
                        id,
                    }: ArticleProps) => (
                        <div className="recomendations-item" key={id}>
                            <RecomendationsItem
                                image={image}
                                country={country}
                                dash={dash}
                                section={section}
                                header={header}
                                id={id}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Recomendations
