const fs = require('fs')
const pdfText = require('pdf-text')

const pathToPdf = __dirname + '/sample.pdf'

pdfText(pathToPdf, (err, chunks) => {
	//chunks is an array of strings
	//loosely corresponding to text objects within the pdf
	//for a more concrete example, view the test file in this repo

	const body = chunks
		.join(' ')
		.replace(/  +/g, ' ')
		.replace(/ - /g, '-')
		.replace(/ . /g, '. ')
		.replace(/([0-9]{4,4}). /g, '$1. \n')

	const text = `# pdf-text-demo

${'```'}
${body}
${'```'}
	`

	console.log(chunks)

	fs.writeFileSync('README.md', text)
})
