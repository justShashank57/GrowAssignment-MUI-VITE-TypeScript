import { useState,useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default function Table(){
        
    interface Data {
        userId:number;
        id:number;
        title:String;
        body:String;
    }
    const [data,setdata] = useState<Data[]>([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then((res:Data[])=>setdata(res))
        .catch(error=>(console.log(error)))
    },[])
    
        //first component
        const columns: GridColDef[] = [
            {
              field: 'userId',
              headerName: 'User Id',
              type:'number',
              width: 90,
              headerAlign: 'center',
            },
            {
              field: 'id',
              headerName: 'Id',
              type:'number',
              width: 90,
              headerAlign: 'center',
              editable: true,
            },
            {
              field: 'title',
              headerName: 'Title',
              width: 200,
              headerAlign: 'center',
              editable: true,
            },
            {
                field: 'body',
                headerName: 'Body',
                width: 600,
                headerAlign: 'center',
                editable: true,
              },
        ]
        const rows = data;

    return(
        <>
                 <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      sx={{
                        "& .MuiDataGrid-columnHeader": {
                          backgroundColor: "#f0f0f0",
                        },
                        "& .MuiDataGrid-cell": {
                          border: "1px solid #e0e0e0",
                        },
                      }}
                      initialState={{
                        pagination: {
                          paginationModel: {
                            pageSize: 5,
                          },
                        },
                      }}
                      pageSizeOptions={[5]}
                    />
               </Box>
        </>
    )
}