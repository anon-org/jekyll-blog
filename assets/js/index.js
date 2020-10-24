'use strict'
const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

const hex2pastel = hex => {
  let h = parseInt((`0x${hex}` + 56) % 360)
  let s = 50
  let l = (h % 12) + 75

  return `hsl(${h}, ${s}%, ${l}%)`
}

const copyButton = () => {
  return `<div id="copy">copy</div>`
}

// lighter
for (const e of $$('.posts-tags-category') ) {
  e.style.backgroundColor = hex2pastel(e.id)
}

document.addEventListener('click', e => {
  if (e.target && e.target.id === 'copy') {
    let temp = document.createElement('textarea')
    temp.value = e.target.nextSibling.textContent

    document.body.appendChild(temp)
    temp.select()
    document.execCommand("copy")
    document.body.removeChild(temp);
    e.target.innerHTML = 'copied!'

    setTimeout(() => {
      e.target.innerHTML = 'copy'
    }, 1000)
  }
})

for(const e of $$('img')) {
  if (!e.alt) continue

  let temp = document.createElement('div')
  temp.style.textAlign = 'center'
  temp.style.fontStyle = 'italic'
  temp.innerHTML = e.alt
  e.parentNode.append(temp)
}

for(const e of $$('div.highlighter-rouge')) {
  e.innerHTML = copyButton() + e.innerHTML
}