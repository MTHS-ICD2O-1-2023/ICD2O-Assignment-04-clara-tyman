// Copyright (c) 2024 Clara All rights reserved
//
// Created by: Clara Tyman
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  // burger cost variable
  let priceOfBurger = 5
  // input
  const bun = document.getElementById("seeded-bun").checked
  const patty = document.getElementById("two-pattys").checked
  const lettuce = document.getElementById("lettuce").checked
  const tomato = document.getElementById("tomato").checked
  const bacon = document.getElementById("bacon").checked
  const ketchup = document.getElementById("ketchup").checked
  const TAX = 0.13

  if (bun == true) {
  priceOfBurger = priceOfBurger + 0.50
  }
  if (patty == true) {
    priceOfBurger = priceOfBurger + 0.50
  }
  if (lettuce == true) {
    priceOfBurger = priceOfBurger + 0.25
  }
  if (tomato == true) {
    priceOfBurger = priceOfBurger + 0.25
  }
  if (bacon == true) {
    priceOfBurger = priceOfBurger + 0.25
  }
  if (ketchup == true) {
    priceOfBurger = priceOfBurger + 0.25
  }
  // output end total
  document.getElementById("page-content-answer").innerHTML = "Total + Tax:"
  document.getElementById("answer").innerHTML = "$" + (priceOfBurger + (priceOfBurger * TAX)).toFixed(2)
}