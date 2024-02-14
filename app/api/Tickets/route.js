import { ticket } from '@/app/(models)/ticketModel';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await ticket.create(ticketData);

    return NextResponse.json({ message: 'Ticket Created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error', error: error },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const tickets = await ticket.find();

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error', error: error },
      { status: 500 }
    );
  }
};
