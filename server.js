const pdf = require('html-pdf');
const fileName = require('./src/funcoes/geral');
const ejs = require('ejs');

ejs.renderFile('./src/index.html', (err, html) => {
    if (err) {
        console.log(err)
    } else {
        var name = fileName.name();

        pdf.create(html, {}).toFile(`./pdf/pdf_${name}.pdf`, (err, res) => {
            if (err) {
                console.log("Ocorreu algum erro ao Gerar o pdf", err);
            } else {
                console.log(res);
            }
        });
    }

})

