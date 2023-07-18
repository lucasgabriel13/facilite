export class Transform {
  static formatCurrency(value: number): string {
    const currency = Intl.NumberFormat('pt-br', {
      currency: 'BRL',
      style: 'currency',
    }).format(value);

    return currency;
  }

  static localeDate(value: string) {
    const date = new Date(value).toLocaleDateString('pt-br');
    return date;
  }
}
