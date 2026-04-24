"""
Seed RobotLyne product, solution, FAQ data into Supabase.
Run once: python seed_data.py
"""
import os
from dotenv import load_dotenv
from database import get_supabase
from rag import ingest_document

load_dotenv()

PRODUCTS = [
    {
        "name": "AGV Forklift",
        "model_number": "RL-FL1600",
        "category": "AGV",
        "payload_kg": 1600,
        "speed_ms": 2.0,
        "description": "Heavy-duty autonomous forklift robot for pallet transport and stacking. Laser SLAM + QR hybrid navigation.",
        "specs": {
            "payload": "1600kg",
            "speed": "2m/s",
            "lift_height": "6m",
            "navigation": "Laser SLAM + QR hybrid",
            "battery": "Lithium, 8h runtime",
            "safety": "360° LiDAR obstacle detection",
        },
        "use_cases": ["pallet transport", "stacking", "cross-docking", "loading dock"],
        "page_url": "/products/agv-forklift",
    },
    {
        "name": "Lifting AGV",
        "model_number": "RL-LT1000",
        "category": "AGV",
        "payload_kg": 1000,
        "speed_ms": 1.5,
        "description": "Compact lifting AGV for high-density shelf environments. 600–1000kg capacity.",
        "specs": {
            "payload": "600–1000kg",
            "lift_height": "up to 6m",
            "navigation": "QR code + laser",
            "aisle_width": "900mm minimum",
        },
        "use_cases": ["high-density shelf picking", "goods-to-person", "ASRS buffer"],
        "page_url": "/products/lifting-agv",
    },
    {
        "name": "Storage AGV",
        "model_number": "RL-SD005",
        "category": "AGV",
        "payload_kg": None,
        "speed_ms": 4.0,
        "description": "Rail-guided storage shuttle for dense racking systems. 4x storage density vs conventional racking.",
        "specs": {
            "type": "rail-guided shuttle",
            "speed": "4m/s",
            "density": "4x vs conventional racking",
            "temperature": "-25°C to +40°C (cold chain capable)",
        },
        "use_cases": ["ASRS buffer", "cold chain storage", "high-density warehouse"],
        "page_url": "/products/storage-agv",
    },
    {
        "name": "AGV Roller",
        "model_number": "RL-RC200",
        "category": "AGV",
        "payload_kg": 200,
        "speed_ms": 1.8,
        "description": "Conveyor-linked roller AGV bridging production lines and automated storage systems.",
        "specs": {
            "payload": "200kg",
            "speed": "1.8m/s",
            "integration": "conveyor, sortation systems",
        },
        "use_cases": ["production line bridge", "outbound sortation", "cross-docking"],
        "page_url": "/products/agv-roller",
    },
    {
        "name": "Composite Mobile Robot",
        "model_number": "RL-CR-PICK",
        "category": "AMR",
        "payload_kg": 5,
        "speed_ms": 1.5,
        "description": "Autonomous mobile robot with integrated 6-axis robotic arm for intelligent goods-to-person picking.",
        "specs": {
            "base": "AMR autonomous mobile robot",
            "arm": "6-axis, 5kg end-effector payload",
            "vision": "3D camera + AI object detection",
            "navigation": "SLAM autonomous",
        },
        "use_cases": ["depalletizing", "order picking", "bin-picking", "mixed-SKU handling"],
        "page_url": "/products/composite-mobile-robot",
    },
]

SOLUTIONS = [
    {
        "name": "ASRS",
        "slug": "asrs",
        "description": "Automated Storage and Retrieval System. End-to-end design and deployment using AGV shuttles and LCCS software. Achieves +75% storage capacity and 4x efficiency.",
        "key_metrics": {"storage_increase": "+75%", "efficiency_boost": "4x", "cycle_time_reduction": "300%"},
        "related_products": ["RL-SD005", "RL-LT1000"],
        "page_url": "/solutions/asrs",
    },
    {
        "name": "Material Handling",
        "slug": "material-handling",
        "description": "AGV-based intralogistics for receiving, transport, sortation, and dispatch. 99.99% sorting accuracy, 40-60% cost reduction.",
        "key_metrics": {"sorting_accuracy": "99.99%", "cost_reduction": "40-60%"},
        "related_products": ["RL-FL1600", "RL-RC200", "RL-LT1000"],
        "page_url": "/solutions/material-handling",
    },
    {
        "name": "Intelligent Picking",
        "slug": "picking",
        "description": "AMR-based goods-to-person picking with computer vision. 4x picking rate, 0% error rate.",
        "key_metrics": {"picking_rate": "4x vs manual", "error_rate": "0%"},
        "related_products": ["RL-CR-PICK"],
        "page_url": "/solutions/picking",
    },
    {
        "name": "Software / LCCS",
        "slug": "software",
        "description": "Logistics Cloud Control System — unified WMS + WCS + Fleet Management for up to 500 AGVs simultaneously.",
        "key_metrics": {"fleet_scale": "500+ AGVs", "integration": "ERP, WMS, MES via API"},
        "related_products": [],
        "page_url": "/solutions/software",
    },
]

FAQS = [
    {"question": "What is the minimum order quantity for AGV systems?", "answer": "RobotLyne typically works with projects starting from 5 units. For custom deployments, we provide a full site assessment and ROI analysis before any commitment.", "category": "sales"},
    {"question": "How long does AGV installation take?", "answer": "A standard AGV deployment takes 8–16 weeks: 2 weeks site assessment, 4–8 weeks manufacturing, 2–4 weeks installation and SAT testing.", "category": "implementation"},
    {"question": "What navigation technology do your AGVs use?", "answer": "RobotLyne AGVs use laser SLAM, QR code grids, or hybrid navigation depending on the model. The RL-FL1600 uses laser SLAM + QR hybrid for maximum flexibility.", "category": "technical"},
    {"question": "Do you support integration with existing WMS systems?", "answer": "Yes. Our LCCS software integrates with major WMS platforms (SAP, Oracle, Manhattan) via REST API and MQ. Full API documentation is available.", "category": "technical"},
    {"question": "What industries do you serve?", "answer": "RobotLyne serves e-commerce, automotive, pharmaceutical, cold chain, manufacturing, and retail industries across 80+ global markets.", "category": "company"},
    {"question": "Can your AGVs work in cold chain environments?", "answer": "Yes. The RL-SD005 Storage AGV is rated for -25°C to +40°C, making it suitable for cold storage and frozen food warehouses.", "category": "technical"},
    {"question": "What safety standards do your robots comply with?", "answer": "All RobotLyne AGVs comply with ISO 3691-4 (industrial truck safety), CE marking, and FCC standards. All units include 360° LiDAR obstacle detection.", "category": "technical"},
    {"question": "How do I get a quote?", "answer": "Contact us at info@robotlyne.com or submit an inquiry through our website. Our team responds within 24 hours.", "category": "sales"},
]

# RAG document chunks
RAG_DOCUMENTS = [
    {
        "content": "RobotLyne is a warehouse automation company founded in 2004, headquartered in China with offices in 10+ countries. We serve 80+ global markets with 100+ invention patents and 1,000+ employees. Our product range includes AGV forklifts, lifting AGVs, storage shuttles, roller AGVs, and composite mobile robots.",
        "source": "company_overview",
    },
    {
        "content": "The AGV Forklift RL-FL1600 is RobotLyne's flagship heavy-duty autonomous forklift. It carries 1600kg payload at 2m/s using laser SLAM + QR hybrid navigation. It can lift to 6m height and operates 8 hours on a single lithium battery charge. Used for pallet transport, stacking, and cross-docking.",
        "source": "product/agv-forklift",
    },
    {
        "content": "The Lifting AGV RL-LT1000 handles 600–1000kg loads in high-density shelf environments. Minimum aisle width 900mm. Uses QR code + laser navigation. Ideal for goods-to-person picking systems and ASRS buffer zones.",
        "source": "product/lifting-agv",
    },
    {
        "content": "The Storage AGV RL-SD005 is a rail-guided shuttle achieving 4x storage density compared to conventional racking. Operates at 4m/s, rated for -25°C to +40°C for cold chain environments. Core component in ASRS deployments.",
        "source": "product/storage-agv",
    },
    {
        "content": "The Composite Mobile Robot RL-CR-PICK combines an autonomous mobile base with a 6-axis robotic arm (5kg payload) and 3D vision. Used for intelligent bin-picking, depalletizing, and mixed-SKU order fulfillment without manual intervention.",
        "source": "product/composite-mobile-robot",
    },
    {
        "content": "RobotLyne's ASRS solution achieves +75% storage capacity increase and 4x efficiency improvement over manual systems. Cycle time is reduced by up to 300%. The system uses Storage AGV RL-SD005 and Lifting AGV RL-LT1000 coordinated by LCCS software.",
        "source": "solution/asrs",
    },
    {
        "content": "The Material Handling solution achieves 99.99% sorting accuracy and 40-60% cost reduction. It covers the full intralogistics flow: receiving, transport, sortation, and dispatch, using AGV Forklifts, Rollers, and Lifting AGVs.",
        "source": "solution/material-handling",
    },
    {
        "content": "RobotLyne's Intelligent Picking solution delivers 4x picking rate and 0% error rate using the RL-CR-PICK composite mobile robot with computer vision AI. Suitable for e-commerce, pharmaceutical, and retail order fulfillment.",
        "source": "solution/picking",
    },
    {
        "content": "The LCCS (Logistics Cloud Control System) is RobotLyne's unified software platform integrating WMS, WCS, and Fleet Management. It coordinates up to 500 AGVs simultaneously with real-time tracking, path optimization, and predictive maintenance. Integrates with SAP, Oracle, Manhattan via REST API.",
        "source": "solution/software",
    },
    {
        "content": "RobotLyne's 6-step implementation process: 1. Site Assessment (data collection, spatial analysis) 2. Solution Development (custom engineering) 3. ROI Analysis (payback forecasting) 4. Manufacturing (hardware + software integration) 5. Installation (deployment + SAT) 6. Support (24/7 monitoring + training).",
        "source": "company/implementation",
    },
]


def seed():
    db = get_supabase()
    print("🌱 Seeding Supabase...")

    # Products
    db.table("products").delete().neq("id", 0).execute()
    db.table("products").insert(PRODUCTS).execute()
    print(f"  ✅ {len(PRODUCTS)} products inserted")

    # Solutions
    db.table("solutions").delete().neq("id", 0).execute()
    db.table("solutions").insert(SOLUTIONS).execute()
    print(f"  ✅ {len(SOLUTIONS)} solutions inserted")

    # FAQs
    db.table("faqs").delete().neq("id", 0).execute()
    db.table("faqs").insert(FAQS).execute()
    print(f"  ✅ {len(FAQS)} FAQs inserted")

    # RAG documents
    db.table("documents").delete().neq("id", 0).execute()
    for doc in RAG_DOCUMENTS:
        ingest_document(doc["content"], doc["source"])
        print(f"  📄 Embedded: {doc['source']}")
    print(f"  ✅ {len(RAG_DOCUMENTS)} documents embedded into pgvector")

    print("\n🎉 Seeding complete!")


if __name__ == "__main__":
    seed()
