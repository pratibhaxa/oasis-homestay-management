import { rapidApiConfig } from "../config/genericConfig.js";

import axios from "axios";

const generateQR = async (inputText, inputSize, imageType) => {
  const options = {
    method: "GET",
    url: "https://qrcodeutils.p.rapidapi.com/qrcodefree",
    params: {
      text: inputText,
      validate: "true",
      size: inputSize + " " + inputSize,
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
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const outputResponse = await generateQR(
  "https://www.youtube.com",
  "150",
  "svg"
);
console.log(outputResponse);
