module.exports = {
  run: [{
    method: "shell.run",
    params: {
      venv: "env",
      path: "app",
      message: [
        "python inference.py"
      ]
    }
  }]
} 