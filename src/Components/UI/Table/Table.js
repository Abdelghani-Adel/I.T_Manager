import { Fragment } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = (props) => {
  const { dataArray, columns, dataTitle, basePath } = props;
  const hasData = dataArray.length > 0;

  return (
    <Fragment>
      {!hasData && (
        <h3 className="text-center fw-bold text-danger">
          No {dataTitle} Found!
        </h3>
      )}

      {hasData && (
        <table className="table table-hover table-bordered border">
          <TableHead columns={columns} />
          <TableBody
            dataArray={dataArray}
            columns={columns}
            basePath={basePath}
          />
        </table>
      )}
    </Fragment>
  );
};

export default Table;

/*
Needed Props Examples: -
[dataArray, columns, dataTitle, basePath]
[1] dataArray = [
  {
    id: '1',
    name: 'Veeam Backup',
    price: '50$',
    purchasedTo: 'Abdelghani Adel'
  },
  {
    id: '2',
    name: 'IDM',
    price: '30$',
    purchasedTo: 'Saleh Adel'
  }
]
[2] columns = [
  {
    id: 1,
    title: 'name',
    style: 'text-center',
  },
  {
    id: 2,
    title: 'price',
    style: '',
  },
  {
    id: 3,
    title: 'purchasedTo',
    style: ''
  }
]
[3] dataTitle = 'Title'


Props Rules :-
[1] Object structure in columns => {id: , title: '', style: ''}
[2] title in column object has to equal === the property of the object in dataArray
    if this column is for the price
    so in the every object in dataArray, look for the price property 
    that price property has to equal === the title of the column
  
[3] 

*/
