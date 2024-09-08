import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Marker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: null })
  description: string | null;

  @Column('decimal', { precision: 10, scale: 7 }) // 10 digits total, 7 after the decimal
  latitude: number;

  @Column('decimal', { precision: 10, scale: 7 }) // 10 digits total, 7 after the decimal
  longitude: number;

  @Column({ default: false })
  hasAttachment: boolean;

  @Column({ default: false })
  hasVideo: boolean;

  @CreateDateColumn({
    type: 'text',
    transformer: {
      to: (value: Date) => value.toISOString(),
      from: (value: string) => new Date(value),
    },
  })
  createdDate: Date;

  @CreateDateColumn({
    type: 'text',
    transformer: {
      to: (value: Date) => value.toISOString(),
      from: (value: string) => new Date(value),
    },
  })
  lastUpdated: Date;
}
