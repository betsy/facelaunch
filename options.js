// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function save_website() {
  var website = document.getElementById('siteName').value;
  document.getElementById('siteName').value = "";
  chrome.storage.sync.set({[website]: 0});
  document.location.reload()
}

function show_sites() {
  chrome.storage.sync.get(null, function(items) {
    var allKeys = Object.keys(items);

    var table = document.getElementById("siteList");

    var i;
    for (i = 0; i < allKeys.length; i++) {
      var row = table.insertRow(i);
      var cell = row.insertCell(0);
      cell.innerHTML = allKeys[i];
      cell.id = allKeys[i];
    }
  });
}

function remove_website() {
  var website = document.getElementById('removeSiteName').value;
  document.getElementById('removeSiteName').value = "";
  chrome.storage.sync.remove([website])
  document.location.reload()
}

document.addEventListener('DOMContentLoaded', show_sites);
document.getElementById('removeButton').addEventListener('click', remove_website);
document.getElementById('addButton').addEventListener('click', save_website);
