import { rapidApiConfig } from "../config/genericConfig";

import axios from "axios";

const generateQR = async (inputText, imageType) => {
  const options = {
    method: "GET",
    url: "https://qrcodeutils.p.rapidapi.com/qrcodefree",
    params: {
      text: inputText,
      validate: "true",
      size: "150",
      type: imageType,
      level: "M",
    },
    headers: {
      "X-RapidAPI-Key": rapidApiConfig.apiKey,
      "X-RapidAPI-Host": rapidApiConfig.host,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(typeof response.data);
    // console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};

generateQR("https://www.youtube.com", "svg");
