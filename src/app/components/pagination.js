import React, { Component } from 'react'

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        const { page } = this.props
        const pageNew = e.target.getAttribute('data-page')
        if (pageNew == page) return
        try {
            this.props.onClick(pageNew);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const page = parseInt(this.props.page)
        const limit = parseInt(this.props.limit)
        const total = parseInt(this.props.total)
        const pagesLimit = Math.ceil(total / limit)
        const itemsRound = 7
        const itemsMax = itemsRound * 2 + 1

        let itemsSlicePage = 0

        if (pagesLimit > itemsMax) {
            itemsSlicePage = (page - 1) - itemsRound < pagesLimit - itemsMax ? Math.max(0, (page - 1) - itemsRound) : pagesLimit - itemsMax
        }

        const items = new Array(pagesLimit).fill(1).slice(itemsSlicePage, itemsSlicePage + itemsMax)

        return (
            <div className="pagination">

                {(itemsSlicePage == 0) ? "" :
                    (
                        <a href="#" className={"btn"} data-page={1} onClick={this.handleClick}>
                            {"start"}
                        </a>
                    )
                }

                {itemsSlicePage > 0 ? " " : ""}

                {items.map((item, i) => (
                    <a key={i} href="#" className={"btn" + (i + itemsSlicePage + 1 == page ? " active" : "")} data-page={i + itemsSlicePage + 1} onClick={this.handleClick}>
                        {i + itemsSlicePage + 1}
                    </a>
                ))}

                {pagesLimit < itemsMax + itemsSlicePage + 1 ? "" : " "}

                {(pagesLimit < itemsMax + itemsSlicePage + 1) ? "" :
                    (
                        <a href="#" className={"btn"} data-page={pagesLimit} onClick={this.handleClick}>
                            {"end"}
                        </a>
                    )
                }
            </div>
        );
    }
}

export default Pagination;
