#!/usr/bin/env node

'use strict'

const lines = require('fs')
  .readFileSync(process.argv[2] || '_chat.txt', 'utf8')
  .split('\r')
  .join('')
  .split('\n')

const counts = {}

for (const line of lines) {
  if (line.indexOf('] ') !== -1 && line.indexOf(': ') !== -1) {
    const user = line.split('] ')[1].split(': ')[0]

    counts[user]
      ? counts[user]++
      : counts[user] = 1
  }
}

for (const user in counts) {
  console.log(counts[user] + '\t' + user)
}

// line.indexOf('changed the subject to') === -1 &&
// line.indexOf('changed this group') === -1 &&
// line.indexOf(' added ') === -1 &&
// line.indexOf('created this group') === -1 &&
// line.indexOf('added you') === -1 &&
// line.indexOf('are now secured') === -1 &&
// line.indexOf('changed this group ‪') === -1 &&
// line.indexOf('HILLEL COMIDITA') === -1 &&
// line.indexOf('entrada gratis') === -1 &&
// line.indexOf('Javi le falta ese') === -1)
