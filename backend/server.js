import express from "express";
import { createClient } from "@supabase/supabase-js";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();

// using morgan for logs
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(superbaseUrl, superbaseAnonKey);

app.get("/recipe", async (req, res) => {
  const { data, error } = await supabase.from("recipe").select();
  console.log(data);
  res.send(data);
});

app.listen(3000, () => {
  console.log(`> Ready on http://localhost:3000`);
});
