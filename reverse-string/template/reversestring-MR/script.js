const invertirTexto = () => {
    const [input, output] = [
      document.getElementById('texto'),
      document.getElementById('resultado')
    ];

    output.textContent = [...input.value].reverse().join('');
  };