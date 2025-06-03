const params = new URLSearchParams(window.location.search);
const toolId = params.get("id");

fetch("tools.json")
  .then(response => response.json())
  .then(data => {
    const tool = data.find(t => t.id === toolId);
    document.getElementById("tool-info").innerText =
      tool ? `Tool: ${tool.name}, Location: ${tool.location}` : "Tool not found";
  });
