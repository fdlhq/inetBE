import { web } from "../inetBE/src/application/web.js";
import dotenv from "dotenv";

dotenv.config();

/* Server berhasil run */

const init = async () => {
  try {
    const port = process.env.PORT || 3000;
    web.listen(port, () => {
      console.log("Server is running successfully !");
    });
  } catch (error) {
    console.error(error);
  }
};

init();
