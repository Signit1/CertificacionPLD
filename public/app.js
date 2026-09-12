const fileList = document.getElementById('file-list');
const emptyState = document.getElementById('empty-state');
const preview = document.getElementById('preview');
const placeholder = document.getElementById('placeholder');
const refreshBtn = document.getElementById('refresh-btn');

let activeFile = null;

async function fetchFileList() {
  const manifestResponse = await fetch('/files.json');
  if (manifestResponse.ok) {
    return manifestResponse.json();
  }

  const apiResponse = await fetch('/api/files');
  if (apiResponse.ok) {
    return apiResponse.json();
  }

  return [];
}

async function loadFiles() {
  const files = await fetchFileList();

  fileList.innerHTML = '';

  if (files.length === 0) {
    emptyState.classList.remove('hidden');
    preview.hidden = true;
    placeholder.hidden = false;
    activeFile = null;
    return;
  }

  emptyState.classList.add('hidden');

  for (const file of files) {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = file.name;
    button.dataset.url = file.url;

    if (file.name === activeFile) {
      button.classList.add('active');
    }

    button.addEventListener('click', () => openFile(file.name, file.url));
    item.appendChild(button);
    fileList.appendChild(item);
  }

  if (activeFile && !files.some((f) => f.name === activeFile)) {
    activeFile = null;
    preview.hidden = true;
    placeholder.hidden = false;
  }
}

function openFile(name, url) {
  activeFile = name;
  placeholder.hidden = true;
  preview.removeAttribute('hidden');
  preview.src = url;

  fileList.querySelectorAll('button').forEach((btn) => {
    btn.classList.toggle('active', btn.textContent === name);
  });
}

refreshBtn.addEventListener('click', loadFiles);
loadFiles();
