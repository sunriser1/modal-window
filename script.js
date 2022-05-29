'use strict';

const google = document.querySelector('.google');
google.addEventListener('mouseover', () => {
  google.style.borderColor = '#34a853';
  google.style.transition = '500ms';
});
google.addEventListener('mouseout', () => {
  google.style.borderColor = '#242625';
  google.style.transition = '500ms';
});

const fb = document.querySelector('.fb');
fb.addEventListener('mouseover', () => {
  fb.style.borderColor = '#1b74e4';
  fb.style.transition = '500ms';
});
fb.addEventListener('mouseout', () => {
  fb.style.borderColor = '#242625';
  fb.style.transition = '500ms';
});

const github = document.querySelector('.github');
github.addEventListener('mouseover', () => {
  github.style.borderColor = '#494949';
  github.style.transition = '500ms';
});
github.addEventListener('mouseout', () => {
  github.style.borderColor = '#242625';
  github.style.transition = '500ms';
});

const instagram = document.querySelector('.instagram');
instagram.addEventListener('mouseover', () => {
  instagram.style.borderColor = '#e44e66';
  instagram.style.transition = '500ms';
});
instagram.addEventListener('mouseout', () => {
  instagram.style.borderColor = '#242625';
  instagram.style.transition = '500ms';
});

const twitter = document.querySelector('.twitter');
twitter.addEventListener('mouseover', () => {
  twitter.style.borderColor = '#1da1f3';
  twitter.style.transition = '500ms';
});
twitter.addEventListener('mouseout', () => {
  twitter.style.borderColor = '#242625';
  twitter.style.transition = '500ms';
});

const tg = document.querySelector('.tg');
tg.addEventListener('mouseover', () => {
  tg.style.borderColor = '#fff';
  tg.style.transition = '500ms';
});
tg.addEventListener('mouseout', () => {
  tg.style.borderColor = '#242625';
  tg.style.transition = '500ms';
});

const container = document.querySelector('.container');
const loginCover = document.querySelector('.loginCover');
loginCover.addEventListener('click', () => {
  container.style.display = 'none';
  loginCover.style.display = 'none';
});

const login = document.querySelector('.login');
login.addEventListener('click', () => {
  container.style.display = 'block';
  loginCover.style.display = 'block';
});

let leftContainer = window.innerWidth / 2 - 230 + 'px';
let topContainer = window.innerHeight / 2 - 225 + 'px';
container.style.top = topContainer;
container.style.left = leftContainer;

window.addEventListener('resize', () => {
  leftContainer = window.innerWidth / 2 - 230 + 'px';
  topContainer = window.innerHeight / 2 - 230 + 'px';
  container.style.top = topContainer;
  container.style.left = leftContainer;
});

const link = document.querySelectorAll('a');
for (let each of link) {
  each.addEventListener('click', (event) => {
    event.preventDefault();
  });
}

const attention = document.querySelector('.attention');
const isAgree = document.querySelector('#checkbox');
const buttonClick = document.querySelectorAll('.container button');
for (let one of buttonClick) {
  one.addEventListener('click', () => {
    if (!isAgree.checked) attention.style.display = 'block';
  });
}
isAgree.addEventListener('click', () => {
  if (isAgree.checked) attention.style.display = 'none';
});
