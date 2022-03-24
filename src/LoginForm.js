import React, { useState, useEffect } from "react";

export const LoginForm = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("/").then((res) => res.json());

      console.log("data", data);
    };

    getData();
  }, []);

  return <h1>hello</h1>;
};
