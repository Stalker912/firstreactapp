import { useMemo } from "react";

export const getPageCount = (totalCount, limit) => {
   return Math.ceil(totalCount / limit)
}

export const UsePageList = (totalPages) => {

    const upadatePageArray = () =>{
        const tempArray = []

        for (let index = 0; index < totalPages; index++) {
          tempArray.push(index + 1)
        }

        return tempArray
    }

    const resalt = useMemo(upadatePageArray, [totalPages])
    return resalt
}