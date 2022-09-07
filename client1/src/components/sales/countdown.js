import React from "react";

const handNumber = (number) => {
  return number < 10 ? `0${number}` : number;
};
export const countdown = (dayFuture) => {
  const time = Math.floor((dayFuture - new Date()) / 1000);
  if (time < 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }
  const days = Math.floor(time / (24 * 3600));
  const hours = Math.floor((time % (3600 * 24)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  return {
    days: handNumber(days),
    hours: handNumber(hours),
    minutes: handNumber(minutes),
    seconds: handNumber(seconds),
  };
};
