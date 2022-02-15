import Table from "./table.js";
import { columns, data } from "./data.js";

const table = new Table({
  columns: [...columns],
  data: [...data],
});
const app = document.getElementById("table");
table.render(app);
