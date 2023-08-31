import { rapidApiConfig } from "../config/genericConfig.js";

import axios from "axios";

const generateQR = async (inputText,inputSize, imageType) => {
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
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

(async () => {
  try {
    const outputResponse = await generateQR("https://www.youtube.com", "150", "svg");
    console.log(outputResponse);
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
})();