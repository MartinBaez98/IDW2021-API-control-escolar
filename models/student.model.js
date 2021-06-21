const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        firstname:{
            type: String,
            uppercase: true,
            required: [true, "Nombre obligatorio"],
            maxlength: 50,
        },
        lastname:{
            type: String,
            uppercase: true,
            required: [true, "Apellido obligatorio"],
            maxlength: 50
        },
        curp:{
            type: String,
            required: [true, "CURP obligatoria"],
            uppercase: true,
            validate: {
            validator: function (v) {
            return /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/.test(
                v
                );
              },
              message: (props) => `${props.value} CURP no es válida`,
            },
          },
        date:{
            type: Date,
            required: [true, "Fecha obligatoria"],
            default: Date.now,
        },
        controlnumber:{
            type: String,
            required: [true, "Número de control es obligatorio"],
            unique: true,
        },
        grade:{
            type: Number,
            required: [true, "La calificación es obligatoria"],
            min: 0,
            max: 100,
        },
        career:{
            type: String,
            required: [true, "Carrera es obligatoria"],
            enum: ["ISC", "IM", "IGE", "IC"],
        }

    }
);

const studentModel = mongoose.model('Student', schema, 'student');

module.exports = studentModel;