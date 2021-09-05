import { store } from "@/store";
import firebase from "@/services/_firebase";

const positiveDataPrompt = {
  title:
    "Search the following transcript for positive sentences.\n###\nTranscript: ",
  footer: "\n###\nList of positive sentences in transcript :\n1.",
};
const negativeDataPrompt = {
  title:
    "Search the following transcript for negative sentences.\n###\nTranscript: ",
  footer: "\n###\nList of negative sentences in transcript :\n1.",
};

const dataConst = {
  engine: "curie",
  prompt: "",
  maxTokens: 500,
  temperature: 0.9,
  topP: 1,
  presencePenalty: 0,
  frequencyPenalty: 0,
  bestOf: 3,
  n: 1,
  stream: false,
  stop: ["###"],
};

const getGPTdata = async () => {
  positiveData();
  negativeData();
};

export default getGPTdata;

const positiveData = () => {
  let prompt =
    positiveDataPrompt.title +
    store.getters["userTranscript"] +
    positiveDataPrompt.footer;
  let data = { ...dataConst, prompt };
  const GPT3Request = firebase.functions().httpsCallable("GPT3Request");
  GPT3Request(data).then((response) => {
    store.dispatch("setNegativeData", response.data.choices[0].text);
  });
};

const negativeData = () => {
  let prompt =
    negativeDataPrompt.title +
    store.getters["userTranscript"] +
    negativeDataPrompt.footer;
  let data = { ...dataConst, prompt };
  const GPT3Request = firebase.functions().httpsCallable("GPT3Request");
  GPT3Request(data).then((response) => {
    store.dispatch("setPositiveData", response.data.choices[0].text);
  });
};
