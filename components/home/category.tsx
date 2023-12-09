import React, {useContext, Fragment} from 'react'
import Nested from "../nested";


const Category = () => {
    return (
        <div className="top-nav">
            <div className="container">
                <div className="row">
                    <div className="col-20 col-lg-3">
                        <div className="top-category-container">
                            <a href="#" className="d-none d-lg-flex">
                                <i className="sk sk-nav"/>
                                <span>Ангилал</span>
                            </a>
                            <Nested />
                        </div>
                        <div className="black-out"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
