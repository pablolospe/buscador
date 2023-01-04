import { useMemo } from "react";

export default function MarkedItem({ item, query, onClick }) {

    const { left, center, rigth } = useMemo(() => getPositions(item, query), [item, query])

    function getPositions(item, query) {
        const index = item.title.toLowerCase().indexOf(query);
        const left = item.title.slice(0, index);
        const rigth = item.title.slice(index + query.length);
        const center = item.title.slice(index, index + query.length);

        return { left, center, rigth }
    }

    return <button href="#">
        {left}
        <span style={{fontWeigth:'bolder', backgroundColor:'yellow'}}>{center}</span>
        {rigth}
    </button>
}