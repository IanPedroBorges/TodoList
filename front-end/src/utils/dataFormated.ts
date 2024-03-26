export const dateFormated = (dataString: string) => {
	const data = new Date(dataString);
  
	const dia = String(data.getDate()).padStart(2, '0');
	const mes = String(data.getMonth() + 1).padStart(2, '0'); // Lembrando que os meses começam do zero
	const ano = data.getFullYear();
  
	const hora = String(data.getHours()).padStart(2, '0');
	const minutos = String(data.getMinutes()).padStart(2, '0');
	const segundos = String(data.getSeconds()).padStart(2, '0');
  
	const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
	return dataFormatada;
};