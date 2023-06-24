import React, { useMemo, useEffect } from "react";
import {
  useDataGrid,
  EditButton,
  ShowButton,
  DeleteButton,
  List,
  DateField,
} from "@refinedev/mui";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";

export const BlogPostList: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { dataGridProps } = useDataGrid();

  const columns = useMemo<GridColumns<any>>(
    () => [
      {
        field: "id",
        headerName: translate("blog_posts.fields.id"),
        type: "number",
        minWidth: 50,
      },
      {
        field: "created_at",
        flex: 1,
        headerName: translate("blog_posts.fields.created_at"),
        minWidth: 250,
        renderCell: function render({ value }) {
          return <DateField value={value} />;
        },
      },
      {
        field: "title",
        flex: 1,
        headerName: translate("blog_posts.fields.title"),
        minWidth: 200,
      },
      {
        field: "actions",
        headerName: translate("table.actions"),
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.id} />
              <ShowButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    [translate]
  );
  useEffect(() => {
    console.log("list display", dataGridProps);

    return () => {
      console.log("list end");
    };
  }, []);

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
