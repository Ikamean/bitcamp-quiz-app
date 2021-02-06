import React from 'react'
import Category from '../components/category'
import { useSelector } from 'react-redux'
import { Grid } from '../elements/grid'
import { Div } from '../elements/div'


const CategorysPage = () => {
    let categories = useSelector(state=> state.category.categorieArray)   

    return(

        <Grid >
            
                {categories.map((c,indx)=> <Div border='none' height='100%' key={indx}> <Category category={c} /> </Div>  ) } 
            
        </Grid>
    )
}
 
export default CategorysPage
    