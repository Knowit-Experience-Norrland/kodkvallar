import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

// add API to Apollo Client
const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfjk303n23bz01uedlua2ovd/master",
  headers: {
    Authorization:
      `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzk1NjMxNjgsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xmamszMDNuMjNiejAxdWVkbHVhMm92ZC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOWEwNjQxNWQtNGI0NC00MTBiLWI2YzctMjIwOTE5NjE2NjFiIiwianRpIjoiY2xma3dqbXc0MDEwNDAxdWYxa2JvMjJ1dSJ9.4VCLuu7CEO3P3VsTMhNyYAAgTQbMx0tdsJL_eYXcm6aIpWGZzvlaVFexP9N64DMh4m-1NZ952TTonuLJf_lk4Zr3HU36uWsms4UQ7YkjsHiHbZRLwwTS7epLWOmLMq1sfS4aue72lmdA-yiRLNpEOCCKCmyAZZg9In8AMkrAhnkt0k2Y-9N3nLCBinqQjXVSGoUNXtN1xUaJf18JHuLoEfbr19Ttg2XqzDwR6OcfHA_X4R4-UtEVjpJB5GnHOdtrukrjqgUewGOMa5Ms8hG_r4birbcNQX71gV_UvM1RLIJKOeKd8H4AhE14ZzhHsgYfjVvIq4E6lUNK4q8O_fiq_Hi6qqoGGMswbwFamb_HU3U66tH0UBzIJ3apnPW3wd1lJW5SFqcxUkSURjWFmtl-MvZObxU3SMnGois0dCwHycWbt7b7wm4sg73u1e8UGTAD_rvqy5wo6e1yY4Vet0PZi_nBRqxwS4KMmz9ntA37dH2EPthgBtmeuDL_KbzCIF2Daaa55LTvR5d2Fe5t7IUgCydE4Q1S0B4PfBLK9S3H_T4uNb29DZWXErOsL76X_UYGCwwaeyoAaAU_PFJOE8pX30cCsO_LlS8hthVXdLINmuNSe6-l4BaoUfhwRpyHW3sdMUuDBOS_yvb1wautckH3i267RDTZxnfz2_97jUJHMVo` ||
      "",
  },
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
