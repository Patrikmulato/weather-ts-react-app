import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { OpenWeatherResponse } from '../../interface/types';
import { Temperature } from '../../components';
import './CurrentWeather.css';
import { covertUnixToDate } from '../../utils/TimeConverter';
interface CurrentWeatherProps {
  weatherData: OpenWeatherResponse;
  city: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  weatherData,
  city,
}: CurrentWeatherProps) => {
  return (
    <Container className='vertical-center' fluid>
      <Card className='text-center weather-card'>
        <Card.Header>{city}</Card.Header>
        <Card.Body>
          <Row>
            <Col>{covertUnixToDate(weatherData.current.dt)}</Col>
          </Row>
          <Row>
            <Col>
              <Temperature temp={weatherData.current.temp} />
            </Col>
          </Row>
          <Row>
            <Col>morning</Col>
            <Col>day</Col>
            <Col>night</Col>
          </Row>
          <Row>
            <Col>
              <Temperature temp={weatherData.daily[0].temp.morn} />
            </Col>
            <Col>
              <Temperature temp={weatherData.daily[0].temp.day} />
            </Col>
            <Col>
              <Temperature temp={weatherData.daily[0].temp.night} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CurrentWeather;
