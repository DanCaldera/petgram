import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ id }) => {
    console.log('id', id)
    return (
        <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={id} />
        </Fragment>
    )
}
