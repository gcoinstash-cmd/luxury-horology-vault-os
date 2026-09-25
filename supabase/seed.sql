INSERT INTO timepieces (brand_name, model_name, reference_number, case_material, asking_price_usd) VALUES
('Patek Philippe', 'Grand Complications Perpetual Calendar Chronograph', '5270P-001', '950 Platinum', 218000.00),
('Audemars Piguet', 'Royal Oak Extra-Thin "Jumbo"', '16202ST', 'Stainless Steel', 78500.00),
('Rolex', 'Cosmograph Daytona Le Mans Centennial', '126529LN', '18k White Gold', 245000.00)
ON CONFLICT (reference_number) DO NOTHING;

INSERT INTO caliber_specs (movement_designation, frequency_vph, power_reserve_hours, jewel_count, accuracy_rate) VALUES
('CH 29-535 PS Q', '28,800 vph', 65, 33, '+0.6 s/day')
ON CONFLICT DO NOTHING;
