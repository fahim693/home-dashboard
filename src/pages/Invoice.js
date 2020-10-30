import { Button } from '@material-ui/core'
import React, { useRef } from 'react'
import InvoicePage from '../components/Invoice/Invoice';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../styles/invoice.css'


const Invoice = () => {
    const invoiceRef = useRef();

    const convertToPdf = () => {
        const input = invoiceRef.current;
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm');
                var width = pdf.internal.pageSize.getWidth() - 2 * 3;
                var height = pdf.internal.pageSize.getHeight();
                var position = 0;
                var imgHeight = canvas.height * width / canvas.width;
                var heightLeft = imgHeight;
                pdf.addImage(imgData, 'PNG', 0, position, width, imgHeight, '', 'FAST');
                heightLeft -= height;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 0, position, width, imgHeight, '', 'FAST');
                    heightLeft -= height;
                }
                pdf.save("Invoice.pdf");
            });
    }
    return (
        <div style={{ backgroundColor: '#e5e5e5', paddingBottom: 61 }}>
            <div className='hide-print' style={{ backgroundColor: '#333', marginBottom: 61 }}>
                <div style={{ height: 80, alignItems: 'center', display: 'flex', justifyContent: 'space-between', maxWidth: 1360, margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ flex: 1, color: '#fff', fontWeight: 500, fontSize: 26 }}>Invoice</div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                        <div className='invoice-icons-hover' onClick={convertToPdf}>
                            <svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 9.52941H15.7143V0H6.28571V9.52941H0L11 20.6471L22 9.52941ZM0 23.8235V27H22V23.8235H0Z" fill="white" />
                            </svg>
                        </div>
                        <div className='invoice-icons-hover' onClick={() => window.print()} style={{ margin: '0 10px' }}>
                            <svg width="28" height="22" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3333 6.66667H4.66667C2.45333 6.66667 0.666667 8.45333 0.666667 10.6667V18.6667H6V24H22V18.6667H27.3333V10.6667C27.3333 8.45333 25.5467 6.66667 23.3333 6.66667ZM19.3333 21.3333H8.66667V14.6667H19.3333V21.3333ZM23.3333 12C22.6 12 22 11.4 22 10.6667C22 9.93333 22.6 9.33333 23.3333 9.33333C24.0667 9.33333 24.6667 9.93333 24.6667 10.6667C24.6667 11.4 24.0667 12 23.3333 12ZM22 0H6V5.33333H22V0Z" fill="white" />
                            </svg>
                        </div>
                        <div className='invoice-icons-hover'>
                            <svg width="15" height="28" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 7.00001V22.3333C13 25.28 10.6133 27.6667 7.66667 27.6667C4.72 27.6667 2.33333 25.28 2.33333 22.3333V5.66668C2.33333 3.82668 3.82667 2.33334 5.66667 2.33334C7.50667 2.33334 9 3.82668 9 5.66668V19.6667C9 20.4 8.4 21 7.66667 21C6.93333 21 6.33333 20.4 6.33333 19.6667V7.00001H4.33333V19.6667C4.33333 21.5067 5.82667 23 7.66667 23C9.50667 23 11 21.5067 11 19.6667V5.66668C11 2.72001 8.61333 0.333344 5.66667 0.333344C2.72 0.333344 0.333332 2.72001 0.333332 5.66668V22.3333C0.333332 26.3867 3.61333 29.6667 7.66667 29.6667C11.72 29.6667 15 26.3867 15 22.3333V7.00001H13Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button variant="contained" style={{ backgroundColor: '#2A95C5', color: '#fff', marginRight: 40 }} startIcon={
                            <svg svg width="19" height="16" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.74645 17.0242L18.2669 9.87882C19.0338 9.54447 19.0338 8.45548 18.2669 8.12114L1.74645 0.975797C1.1216 0.698772 0.430488 1.16685 0.430488 1.84508L0.421021 6.24883C0.421021 6.72646 0.771312 7.13722 1.24468 7.19454L14.622 8.99998L1.24468 10.7959C0.771312 10.8627 0.421021 11.2735 0.421021 11.7511L0.430488 16.1549C0.430488 16.8331 1.1216 17.3012 1.74645 17.0242Z" fill="white" />
                            </svg>
                        }>SEND INVOICE</Button>
                        <div className='invoice-icons-hover'>
                            <svg style={{ cursor: 'pointer' }} width="18" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3998 0.613325C16.8798 0.0933251 16.0398 0.0933251 15.5198 0.613325L8.99978 7.11999L2.47978 0.599991C1.95978 0.0799915 1.11978 0.0799915 0.599778 0.599991C0.0797778 1.11999 0.0797778 1.95999 0.599778 2.47999L7.11978 8.99999L0.599778 15.52C0.0797778 16.04 0.0797778 16.88 0.599778 17.4C1.11978 17.92 1.95978 17.92 2.47978 17.4L8.99978 10.88L15.5198 17.4C16.0398 17.92 16.8798 17.92 17.3998 17.4C17.9198 16.88 17.9198 16.04 17.3998 15.52L10.8798 8.99999L17.3998 2.47999C17.9064 1.97333 17.9064 1.11999 17.3998 0.613325Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='print-only' style={{ backgroundColor: '#fff', boxShadow: '0px 0px 5.08092px 1.01618px rgba(0, 0, 0, 0.12)', maxWidth: 870, margin: '0 auto' }} ref={invoiceRef}>
                <InvoicePage />
            </div>

        </div >
    )
}

export default Invoice;