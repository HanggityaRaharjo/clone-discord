import Link from 'next/link';
import React from 'react';

function ChannelServer() {
  return (
    <div>
      <h1>ini Channel Server</h1>
      <Link href="/channel/@me/123123123">Ke direct message</Link>
    </div>
  );
}

export default ChannelServer;
