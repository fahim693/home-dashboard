import { Button } from '@material-ui/core'
import React, { useRef } from 'react'
import InvoicePage from '../components/Invoice/Invoice';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Invoice = () => {
    const invoiceRef = useRef();
    const convertToPdf = () => {
        const input = invoiceRef.current;
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');

                const pdf = new jsPDF();
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, 'PNG', 0, 0, width, height);
                pdf.save("Invoice.pdf");
            });
    }
    return (
        <div>
            <Button onClick={convertToPdf}>Test</Button>
            <div ref={invoiceRef}>
                <InvoicePage />
            </div>
        </div>
    )
}

export default Invoice;