import React from 'react';
import Card from '../Card/Card'
import { NotesRounded } from '@material-ui/icons';


export default function CenteredGrid() {
    return (
        <Card
            title="Notes"
            icon={<NotesRounded className="main-title-icon" />}
            cardType={1}
            withEditIcon={true}
        >
            <div style={{
                padding: '16px 24px 18px',
                color: '#4F4F4F'
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla semper pulvinar. Etiam eu erat non felis vulputate dictum. Nulla rutrum accumsan diam vitae gravida. Morbi condimentum tortor eget malesuada auctor. Mauris dui ipsum, finibus nec augue a, vestibulum gravida sapien. Morbi lacinia ac nibh mollis porta. Donec sed porttitor magna. Aliquam tempor dictum elit.
            </div>
        </Card>
    );
}
