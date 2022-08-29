import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <>
      <div className='d-flex align-items-center justify-content-center mt-5'>
        <h2 style={{ color: '#00716f' }}>Kick-off Your Journey With Us</h2>
      </div>
      <CardGroup className='w-75 m-auto my-5'>
        <Card className='mx-5 border border-0"'>
          <Card.Img variant="top" src="/images/travedoc-header-edit.jpg" />
          <Card.Body>
            <Card.Title className='text-center'>Plan</Card.Title>
            <Card.Text>
              We help to plan your trip properly to maximize it
              and make sure you didn&apos;t miss beautiful moments in your trip.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='mx-5 border border-0"'>
          <Card.Img variant="top" src="/images/travedoc-header-edit.jpg" />
          <Card.Body>
            <Card.Title className='text-center'>Capture</Card.Title>
            <Card.Text>
              Goodbye regret. Our professionals moment-capturer are ready to
              capture the special moments of your trip.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='mx-5 border border-0"'>
          <Card.Img variant="top" src="/images/travedoc-header-edit.jpg" />
          <Card.Body>
            <Card.Title className='text-center'>Enjoy the Trip</Card.Title>
            <Card.Text>
              With our service, you can make sure your trip is a worry-free trip.
              You can enjoy your trip while we take care the plan and documentation.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default GroupExample;
