// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// Saves options to chrome.storage
function save_options() {
  var color = document.getElementById('color').value;
  var likesColor = document.getElementById('like').checked;
  chrome.storage.sync.set({
    favoriteColor: color,
    likesColor: likesColor
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}



function save_website() {
  var website = document.getElementById('siteName').value;
  document.getElementById('siteName').value = "";
  chrome.storage.sync.set({[website]: 0});
}

function show_sites() { 
  chrome.storage.sync.get(null, function(items) {
    var allKeys = Object.keys(items);  
    console.log(allKeys);
    
    var table = document.getElementById("siteList");

    var i;
    for (i = 0; i < allKeys.length; i++) {
      var row = table.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);

      cell1.innerHTML = allKeys[i];
    }
  });
}

function remove_website() {
  chrome.storage.sync.remove(website);
}

function update_table() {
  save_website();
  show_sites();
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoriteColor: 'red',
    likesColor: true
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
  });
}


document.addEventListener('DOMContentLoaded', show_sites);
document.getElementById('addButton').addEventListener('click', save_website);
