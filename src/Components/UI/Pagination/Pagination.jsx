import React from 'react'
import clases from "./pagination.module.css"
import { UsePageList } from '../../../Utils/Pages'


const PagesNavigation = ({currentPage, changePage, totalPages}) => {
    
  const pagelist = UsePageList(totalPages)

  return (
    <div className={clases.pageBlock}>
      {pagelist.map( x =>
         <span 
         onClick={() => changePage(x)}
         key = {x} 
         className={currentPage === x ? [clases.page, clases.pageCurrent].join(" ") : clases.page}> {x} </span>
      )}
      </div>
  )
}

export default PagesNavigation