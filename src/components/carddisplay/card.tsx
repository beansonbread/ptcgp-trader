import React from "react";
import { Card, Col, Row, Tag, Flex } from "antd";

const { Meta } = Card;

export default function DisplayCard() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      <Card
        hoverable
        style={{ width: 230, flexShrink: 0 }}
        cover={
          <img
            draggable={false}
            alt="example"
            src="https://img.gamewith.net/article_tools/pokemon-tcg-pocket/gacha/m513.png?7"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        }
      >
        <Meta title="Gallade ex" description={<Flex gap="4px 0" wrap><Tag color="default">⋄⋄⋄⋄</Tag><Tag color="blue">Space-Time Smackdown - Dialga</Tag></Flex>} />
      </Card>
      <Card
        hoverable
        style={{ width: 230, flexShrink: 0 }}
        cover={
          <img
            draggable={false}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        style={{ width: 230, flexShrink: 0 }}
        cover={
          <img
            draggable={false}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        style={{ width: 230, flexShrink: 0 }}
        cover={
          <img
            draggable={false}
            alt="example"
            src="https://img.gamewith.net/article_tools/pokemon-tcg-pocket/gacha/m513.png?7"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        }
      >
        <Meta title="Gallade ex" description={<Flex gap="4px 0" wrap><Tag color="default">⋄⋄⋄⋄</Tag><Tag color="blue">Space-Time Smackdown - Dialga</Tag></Flex>} />
      </Card>
      <Card
        hoverable
        style={{ width: 230, flexShrink: 0 }}
        cover={
          <img
            draggable={false}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        style={{ width: 230, flexShrink: 0 }}
        cover={
          <img
            draggable={false}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        style={{ width: 230, flexShrink: 0 }}
        cover={
          <img
            draggable={false}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
}
