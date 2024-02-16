import { ticket } from '@/app/(models)/ticketModel';
import { NextResponse } from 'next/server';

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await ticket.findByIdAndDelete(id);

    return NextResponse.json({ message: 'Ticket Deleted', status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function GET(req, { params }) {
  const { id } = params;
  try {
    const foundTicket = await ticket.findOne({ _id: id });

    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error, status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;

    const updateTicketData = await ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });
    return NextResponse.json({ message: 'Updated Ticket' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error, status: 500 });
  }
}
