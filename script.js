// Fetch summary data from DrugComb API
function fetchSummary() {
    const url = 'https://api.drugcomb.org/summary?from=0&to=5';
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        displayData(data, 'Summary Data');
      })
      .catch((error) => {
        displayError(error);
      });
  }
  
  // Fetch cell line data from DrugComb API
  function fetchCellLines() {
    const url = 'https://api.drugcomb.org/cell_lines';
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        displayData(data, 'Cell Line Data');
      })
      .catch((error) => {
        displayError(error);
      });
  }
  // Fetch data by block_id
    function fetchByBlockId() {
        const blockId = document.getElementById('blockIdInput').value.trim();
        if (!blockId) {
        displayError(new Error('Block ID cannot be empty'));
        return;
        }
    
        const url = `https://api.drugcomb.org/summary/${blockId}`;
        fetch(url)
        .then((response) => {
            if (!response.ok) {
            throw new Error('Invalid Block ID or data not found');
            }
            return response.json();
        })
        .then((data) => {
            displayData(data, `Summary for Block ID: ${blockId}`);
        })
        .catch((error) => {
            displayError(error);
        });
    }
  // Display fetched data in the output div
  function displayData(data, title) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h2>${title}</h2><pre>${JSON.stringify(data, null, 2)}</pre>`;
  }
  
  // Display error message
  function displayError(error) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h2>Error</h2><p>${error.message}</p>`;
  }